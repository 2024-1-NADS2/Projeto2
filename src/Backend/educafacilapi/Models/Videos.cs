using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace educafacilapi.Models
{
    public class Videos
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string Titulo { get; set; }
        public string Descricao { get; set; }
        [Required]
        public string Url { get; set; }

        [Required]
        public int CursoId { get; set; }
        [JsonIgnore]
        public virtual Cursos? Curso { get; set; }
    }
}
