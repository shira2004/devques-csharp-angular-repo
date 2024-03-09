using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Common.Dto
{
    public class UserRatingsDto
    {
        public int Id { get; set; }

        public int AnsId { get; set; }

        public int userId { get; set; }
      
     
    }
}
