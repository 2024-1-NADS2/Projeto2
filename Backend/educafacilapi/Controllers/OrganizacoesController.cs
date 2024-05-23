using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using educafacilapi.Data;
using educafacilapi.Models;

namespace educafacilapi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrganizacoesController : ControllerBase
    {
        private readonly EducaFacilDbContext _context;

        public OrganizacoesController(EducaFacilDbContext context)
        {
            _context = context;
        }

        // GET: api/Organizacoes
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Organizacoes>>> GetOrganizacoes()
        {
            return await _context.Organizacoes.ToListAsync();
        }

        // GET: api/Organizacoes/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Organizacoes>> GetOrganizacoes(int id)
        {
            var organizacoes = await _context.Organizacoes.FindAsync(id);

            if (organizacoes == null)
            {
                return NotFound();
            }

            return organizacoes;
        }

        // PUT: api/Organizacoes/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutOrganizacoes(int id, Organizacoes organizacoes)
        {
            if (id != organizacoes.Id)
            {
                return BadRequest();
            }

            _context.Entry(organizacoes).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!OrganizacoesExists(id))
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

        // POST: api/Organizacoes
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Organizacoes>> PostOrganizacoes(Organizacoes organizacoes)
        {
            _context.Organizacoes.Add(organizacoes);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetOrganizacoes", new { id = organizacoes.Id }, organizacoes);
        }

        // DELETE: api/Organizacoes/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteOrganizacoes(int id)
        {
            var organizacoes = await _context.Organizacoes.FindAsync(id);
            if (organizacoes == null)
            {
                return NotFound();
            }

            _context.Organizacoes.Remove(organizacoes);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool OrganizacoesExists(int id)
        {
            return _context.Organizacoes.Any(e => e.Id == id);
        }
    }
}
