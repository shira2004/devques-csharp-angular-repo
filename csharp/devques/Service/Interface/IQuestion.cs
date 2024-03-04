using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Service.Interface
{
    public interface IQuestion<T>:IService<T>
    {
        List<T> GetByCategory(int[] categoryIds) ;

        string EncodeImageToBase64(string imagePath);

    }
}
