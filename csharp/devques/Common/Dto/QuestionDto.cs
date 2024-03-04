using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Common.Dto
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

    public class QuestionDto
    {
        public int? QuestionId { get; set; }
        public int CategoryId { get; set; }

        public string? Title { get; set; }
        public int UserId { get; set; }
        public UserDto? User { get; set; }
        public int CompanyId { get; set; }
        public CompanyDto? Company { get; set; }
        public string Content { get; set; }
        public string? code { get; set; }
        public string? Image { get; set; }
        public Kind Kind { get; set; }
    }
}
