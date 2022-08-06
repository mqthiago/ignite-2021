/**
 * name - string
 * duration - number
 * educator - string
 */

interface Course {
    name: string;
    duration: number;
    educator: string;
}

class CreateCourseService {
    
    execute(data: Course) {
      const { duration, educator, name } = data;
      console.log(name, duration, educator);
    }
}

export default new CreateCourseService();