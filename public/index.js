// React Libs
import React, {Component} from 'react';
import ReactUpload from '@/index';

export default  class Demo extends Component{
    render(){
        const uploadConfig = {
            type:'oss'
        };

        return <div>
            demo111
            <ReactUpload {...uploadConfig}/>
        </div>
    }
}