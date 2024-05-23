using educafacilapi.Models;
using Microsoft.EntityFrameworkCore;

namespace educafacilapi.Data
{
    public class EducaFacilDbContext : DbContext
    {
        public EducaFacilDbContext (DbContextOptions<EducaFacilDbContext> options) : base(options) { }
        public DbSet<Usuario> Usuarios { get; set; }
        public DbSet<educafacilapi.Models.Organizacoes> Organizacoes { get; set; } = default!;
        public DbSet<educafacilapi.Models.Cursos> Cursos { get; set; } = default!;
    }
}
