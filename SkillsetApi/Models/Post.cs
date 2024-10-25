using Newtonsoft.Json;

namespace SkillsetApi.Models
{
    public class Post
    {
        public int Id { get; set; }
        public string Author { get; set; }
        public int AuthorId { get; set; }
        public int Likes { get; set; }
        public double Popularity { get; set; }
        public int Reads { get; set; }
        [JsonProperty("Tags")]
        public List<string> Tags { get; set; }
    }
}
