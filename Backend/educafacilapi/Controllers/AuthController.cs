using educafacilapi.Data;
using educafacilapi.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace educafacilapi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {

        private readonly EducaFacilDbContext _context;

        public AuthController(EducaFacilDbContext context)
        {
            _context = context;
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] UserCredentials credentials)
        {
            var user = await _context.Organizacoes.FirstOrDefaultAsync(o => o.Email == credentials.Email && o.Senha == credentials.Senha);

            if (user != null)
            {
                var claims = new[]
                {
                    new Claim(JwtRegisteredClaimNames.Sub, user.Id.ToString()),
                    new Claim(JwtRegisteredClaimNames.Email, user.Email)
                };

                var secretKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("3duc4f4c1l3duc4f4c1l3duc4f4c1l3duc4f4c1l3duc4f4c1l"));
                var signingCredentials = new SigningCredentials(secretKey, SecurityAlgorithms.HmacSha256);

                var token = new JwtSecurityToken(
                    issuer: "iss",
                    audience: "aud",
                    claims: claims,
                    expires: DateTime.Now.AddHours(12),
                    signingCredentials: signingCredentials
                );

                var tokenString = new JwtSecurityTokenHandler().WriteToken(token);

                return Ok(tokenString);
            }

            return Unauthorized();
        }

        public class UserCredentials
        {
            public string Email { get; set; }
            public string Senha { get; set; }
        }
    }
}
