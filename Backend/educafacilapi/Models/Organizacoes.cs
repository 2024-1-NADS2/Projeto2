using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace educafacilapi.Models
{
    public class Organizacoes
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string Cnpj { get; set; }
        public string? Endereco { get; set; }
        [Required]
        public string Nome { get; set; }
        [Required]
        public string Email { get; set; }
        [Required]
        public string Senha { get; set; }
        public string? Telefone { get; set; }
        public string? Logo { get; set; }
        
        public virtual List<Cursos>? Cursos { get; set; }

        public Organizacoes() {
            Cursos = new List<Cursos>();
        }
    }

    public class OrganizacoesDto
    {
        public int Id { get; set; }
        public string Cnpj { get; set; }
        public string? Endereco { get; set; }
        public string Nome { get; set; }
        public string Email { get; set; }
        public string? Telefone { get; set; }
        public string? Logo { get; set; }

        public virtual List<Cursos>? Cursos { get; set; }

    }
}
