using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;


namespace educafacilapi.Models
{
    public class Cursos
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string Titulo { get; set; }
        [Required]
        public string Professor { get; set; }
        public string Descricao { get; set; }
        public string? CargaHoraria { get; set; }
        public string? Tag { get; set; }

        [Required]
        public int OrganizacaoId { get; set; }
        [JsonIgnore]
        public virtual Organizacoes? Organizacao { get; set; }

        public virtual List<Videos>? Videos { get; set; }

        public Cursos()
        {
            Videos = new List<Videos>();
        }
    }
}
