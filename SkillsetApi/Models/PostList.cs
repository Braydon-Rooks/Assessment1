namespace SkillsetApi.Models
{
    public class PostList(List<Post> posts)
    {
        public List<Post> Posts { get; set; } = posts;
    }
}
