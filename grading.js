function gradingStudents(grades)
{
    for(let i = 0; i < grades.length; i++)
    {
        if(grades[i] < 38 || grades[i] % 5 == 0)
        {
            grades[i] = grades[i]
        }
        else
        {
           for(let j = grades[i];; j++)
           {
               if(j % 5 == 0)
               {
                   if((j - grades[i]) < 3)
                   {
                       grades[i] = j;
                       break;
                   }
                   else
                   {
                       grades[i] = grades[i];
                       break;
                   }
               }
           }
           
           
        }
    }
    return grades;
}