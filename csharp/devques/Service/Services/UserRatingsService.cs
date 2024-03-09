using AutoMapper;
using Common.Dto;
using Repository.Entities;
using Repository.Interface;
using Service.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Service.Services
{
    public class UserRatingsService : IService<UserRatingsDto>
    {
        private readonly IRepository<UserRatings> repository;
        private readonly IMapper mapper;
        public UserRatingsService(IRepository<UserRatings> repository, IMapper map)
        {
            this.repository = repository;
            mapper = map;
        }
        public UserRatingsDto Add(UserRatingsDto item)
        {
            if (!IsValidUserRating(item))
            {
                throw new InvalidOperationException("Duplicate user rating detected");
            }

            return mapper.Map<UserRatingsDto>(repository.Add(mapper.Map<UserRatings>(item)));
        }

        private bool IsValidUserRating(UserRatingsDto userRatingDto)
        {
            bool isDuplicate = repository.GetAll()
                .Any(ur => ur.Id != userRatingDto.Id && ur.userId == userRatingDto.userId && ur.AnsId == userRatingDto.AnsId);

            return !isDuplicate;
        }


        public void Delete(int id)
        {
            throw new NotImplementedException();
        }

        public List<UserRatingsDto> GetAll()
        {
            return mapper.Map<List<UserRatingsDto>>(repository.GetAll());
        }

        public UserRatingsDto GetById(int id)
        {
            return mapper.Map<UserRatingsDto>(repository.Get(id));
        }

        public void Update(int id, UserRatingsDto entity)
        {
            repository.Update(id, mapper.Map<UserRatings>(entity));
        }
    }
}
