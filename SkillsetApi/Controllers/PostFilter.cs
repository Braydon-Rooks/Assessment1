using System.ComponentModel.DataAnnotations;

namespace SkillsetApi.Controllers
{
    public class PostFilter : IValidatableObject
    {
        [Required]
        public string Tags { get; set; }

        public string SortBy { get; set; } = "id";
        public string Direction { get; set; } = "asc";

        private readonly List<string> _acceptedFields = ["id", "reads", "likes", "popularity"];
        private readonly List<string> _acceptedDirections = ["asc", "desc"];
        public IEnumerable<ValidationResult> Validate(ValidationContext validationContext)
        {
            if (!_acceptedFields.Contains(SortBy.ToLower()))
            {
                yield return new ValidationResult($"sortBy parameter is invalid", new[] { nameof(SortBy) });
            }
            if (!_acceptedDirections.Contains(Direction.ToLower()))
            {
                yield return new ValidationResult($"direction parameter is invalid", new[] { nameof(Direction) });
            }
        }
    }
}
