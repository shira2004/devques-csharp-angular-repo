using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Repository.Entities
{
    public enum Kind
    {
        Coding,
        SystemDesign,
        Behavioral,
        Technical,
        ProblemSolving,
        BrainTeasers,
        CodingChallenges,
        SystemArchitecture,
        WhiteboardCoding,
        SoftSkills,
        Theory,
        CaseStudy,
        Ethical,
        ScenarioBased,
        TestingDebugging,
        MachineLearning,
        DevOpsInfrastructure,
        AgileProjectManagement
    }

    public class Question
    {
        [Key]
        public long QuestionId { get; set; }
        public string? Title { get; set; }

        public int CategoryId { get; set; }
        [ForeignKey("CategoryId")]
        public virtual Category Category { get; set; }

        public DateTime DateUpload { get; set; }
        public string Content { get; set; }


        public int UserId { get; set; }
        [ForeignKey("UserId")]
        public virtual User? User { get; set; }

        public virtual ICollection<Answer> Answers { get; set; }

        public int CompanyId { get; set; }
        public Kind Kind { get; set; }
        [ForeignKey("CompanyId")]
        public virtual Company? Company { get; set; }

        public int Score { get; set; }

        public string? Image { get; set; }
        public string? code { get; set; }
       
        //public virtual ICollection<User> Users { get; set; }
    }
}
