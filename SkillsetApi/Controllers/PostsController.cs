using System.Linq.Dynamic.Core;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using SkillsetApi.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace SkillsetApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PostsController : ControllerBase
    {
        // GET: api/<PostsController>
        [HttpGet]
        [Route("/posts")]
        public async Task<IActionResult> GetAsync([FromQuery] PostFilter postFilter)
        {
            if (!ModelState.IsValid) return BadRequest();
            var collectionOfPosts = new List<Post>();
            var tagList = postFilter.Tags.ToLower().Split(',');
            for (int i = 0; i < tagList.Length; i++)
            {
                HttpClient client = new();
                var baseUrl = $"https://api.hatchways.io/assessment/blog/posts?tag={tagList[i]}";

                var resultbody = await client.GetStringAsync(baseUrl);
                var deserializedPokemon = JsonConvert.DeserializeObject<PostList>(resultbody);
                collectionOfPosts.AddRange(deserializedPokemon.Posts);
            }
            var sorted = collectionOfPosts.GroupBy(x => x.Id).Select(x => x.First()).AsQueryable().OrderBy($"{postFilter.SortBy} {postFilter.Direction}");
            return Ok(sorted);
        }
    }
}
