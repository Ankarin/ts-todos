import {shallow} from 'enzyme';
import axios from 'axios'
import Call from './axiosCall'

jest.mock('axios')
it('should get todos', ()=> {
  const todos = 
    {
      "userId": 1,
      "id": 1,
      "title": "delectus aut autem",
      "completed": false
    }
    
const resp ={data:todos}
axios.get.mockResolvedValue(resp)
return Call.all().then(data => {
   
    expect(data).toEqual(todos)
});

})