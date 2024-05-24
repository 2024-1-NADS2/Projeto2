using educafacilapi.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;

namespace educafacilapi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BaseController : ControllerBase
    {

        public readonly EducaFacilDbContext _context;
        public int UserId
        {
            get
            {
                var value = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;

                if(int.TryParse(value, out var id))
                {
                    var org = _context.Organizacoes.Find(id);
                    if (org != null)
                        return id;
                }
                return 0;

            }
        }

        public BaseController(EducaFacilDbContext context)
        {
            _context = context;
        }
    }
}
