﻿using Repository.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repository.Interface
{
    public  interface IUserRepository : IRepository<User>
    {
        User GetUserByEmail(string email);
    }
}
