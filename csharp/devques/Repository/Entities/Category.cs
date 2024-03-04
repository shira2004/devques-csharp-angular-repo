using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repository.Entities
{
    public class Category
    {
        [Key]
        public int CategoryId { get; set; }
            public string CategoryName { get; set; }
            public virtual ICollection<Question> Questions { get; set; }

 
    }
}
