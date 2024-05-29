using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using educafacilapi.Data;
using educafacilapi.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.IdentityModel.JsonWebTokens;
using System.Security.Claims;

namespace educafacilapi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CursosController : BaseController
    {
        public CursosController(EducaFacilDbContext context) : base(context)
        {
        }

        // GET: api/Cursos
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Cursos>>> GetCursos()
        {
            return await _context.Cursos.ToListAsync();
        }

        // GET: api/Cursos/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Cursos>> GetCursos(int id)
        {
            var cursos = await _context.Cursos.FindAsync(id);

            if (cursos == null)
            {
                return NotFound();
            }

            await _context.Entry(cursos).Collection(c => c.Videos).LoadAsync();

            return cursos;
        }

        // PUT: api/Cursos/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [Authorize]
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCursos(int id, Cursos cursos)
        {
            if(UserId == 0) return Forbid();

            if (id != cursos.Id)
            {
                return BadRequest();
            }
            var curso = await _context.Cursos.FindAsync(id);

            if (curso?.OrganizacaoId != UserId) return Forbid();

            _context.Entry(cursos).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CursosExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Cursos
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [Authorize]
        [HttpPost]
        public async Task<ActionResult<Cursos>> PostCursos(Cursos cursos)
        {
            if (UserId == 0) { return Forbid(); }

            cursos.OrganizacaoId = UserId;

            _context.Cursos.Add(cursos);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetCursos", new { id = cursos.Id }, cursos);
        }

        // DELETE: api/Cursos/5
        [Authorize]
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCursos(int id)
        {
            if (UserId == 0) { return Forbid(); }

            var cursos = await _context.Cursos.FindAsync(id);

            if(cursos?.OrganizacaoId != UserId) { return Forbid(); }

            if (cursos == null)
            {
                return NotFound();
            }

            _context.Cursos.Remove(cursos);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool CursosExists(int id)
        {
            return _context.Cursos.Any(e => e.Id == id);
        }
    }
}
