using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Repository.Entities
{
    public class Answer
    {
        [Key]
        public int AnswerId { get; set; }
        public DateTime date { get; set; }

        public long QuestionId { get; set; }
        [ForeignKey("QuestionId")]
        public virtual Question? Question { get; set; }

        public int UserId { get; set; }
        [ForeignKey("UserId")]
        public virtual User? User { get; set; }

        public string Content { get; set; }
        public string? Code { get; set; }
        public int Rating { get; set; }

        public int CategoryId { get; set; }
        public string? Image { get; set; }

        public int Score { get; set; }
        //public virtual ICollection<UserRating> UserRatings { get; set; }
    }
}
