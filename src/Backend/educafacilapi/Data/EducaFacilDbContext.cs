using educafacilapi.Models;
using Microsoft.EntityFrameworkCore;

namespace educafacilapi.Data
{
    public class EducaFacilDbContext : DbContext
    {
        public EducaFacilDbContext (DbContextOptions<EducaFacilDbContext> options) : base(options) { }

        public DbSet<Usuario> Usuarios { get; set; } = default!;
        public DbSet<Organizacoes> Organizacoes { get; set; } = default!;
        public DbSet<Cursos> Cursos { get; set; } = default!;
        public DbSet<Videos> Videos { get; set; } = default!;

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<Cursos>()
                .HasOne(o => o.Organizacao)
                .WithMany(c => c.Cursos)
                .HasForeignKey(o => o.OrganizacaoId);

            modelBuilder.Entity<Videos>()
                .HasOne(c => c.Curso)
                .WithMany(v => v.Videos)
                .HasForeignKey(c => c.CursoId);

        }
    }
}
