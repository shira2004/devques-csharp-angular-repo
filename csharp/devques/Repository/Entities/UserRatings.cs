using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Repository.Entities
{
    public class UserRatings
    {
        [Key]
        public int Id { get; set; }
        
        public int AnsId { get; set; } 
      
        public int userId { get; set; }
        [ForeignKey("userId")]
        public virtual User User { get; set; }
        [ForeignKey("AnsId")]
        public virtual Answer Answer { get; set; }  

    }
}
