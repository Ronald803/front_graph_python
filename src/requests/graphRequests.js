import axios from 'axios';

const url = 'http://localhost:3001/api/graph'

export function sendCodeToBE(data){
    return (
        axios.post(
            url,
            data,
            {
                headers: {
                    'Content-Type': 'text/plain'
                  },
                responseType: 'arraybuffer'
            }
            
        )
    )
}