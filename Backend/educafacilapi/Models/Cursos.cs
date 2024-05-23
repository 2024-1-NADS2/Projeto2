using System.ComponentModel.DataAnnotations;

namespace educafacilapi.Models
{
    public class Cursos
    {
        [Key]
       public int Id { get; set; }
        [Required]
       public string Materia { get; set; }
        [Required]
        public string Professor { get; set; }
        public string Descricao { get; set; }
        public string CargaHoraria { get; set; }

    }
}
