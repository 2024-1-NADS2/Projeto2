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

namespace educafacilapi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrganizacoesController : BaseController
    {

        public OrganizacoesController(EducaFacilDbContext context) : base(context)
        {
        }

        // GET: api/Organizacoes
        [HttpGet]
        public async Task<ActionResult<IEnumerable<OrganizacoesDto>>> GetOrganizacoes()
        {
            var organizacoes = await _context.Organizacoes.Include(o => o.Cursos).ToListAsync();
            return organizacoes.Select(org => OcultarSenha(org)).ToList();
        }

        // GET: api/Organizacoes/5
        [HttpGet("{id}")]
        public async Task<ActionResult<OrganizacoesDto>> GetOrganizacoes(int id)
        {
            var organizacoes = await _context.Organizacoes.FindAsync(id);

            if (organizacoes == null)
            {
                return NotFound();
            }

            await _context.Entry(organizacoes).Collection(c => c.Cursos).LoadAsync();

            return OcultarSenha(organizacoes);
        }

        // PUT: api/Organizacoes/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [Authorize]
        [HttpPut("{id}")]
        public async Task<IActionResult> PutOrganizacoes(int id, Organizacoes organizacoes)
        {
            if (id != organizacoes.Id)
            {
                return BadRequest();
            }

            if(id != UserId) return Forbid();

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
        [Authorize]
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteOrganizacoes(int id)
        {
            if (id != UserId) return Forbid();

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

        private OrganizacoesDto OcultarSenha(Organizacoes organizacoes)
        {
            return new OrganizacoesDto
            {
                Id = organizacoes.Id,
                Cnpj = organizacoes.Cnpj,
                Endereco = organizacoes.Endereco,
                Nome = organizacoes.Nome,
                Email = organizacoes.Email,
                Telefone = organizacoes.Telefone,
                Logo = organizacoes.Logo,
                Cursos = organizacoes.Cursos,
            };
        }
    }
}
