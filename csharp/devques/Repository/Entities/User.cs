using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Repository.Entities
{
    public class User
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int UserId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }

        public virtual ICollection<Question> Questions { get; set; }
        public string? Image { get; set; }


        public virtual ICollection<Answer> Answers { get; set; }
     //   public virtual ICollection<Question> GivenQuestions { get; set; }
    }
}
