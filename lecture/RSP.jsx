import React, {Component} from 'react';

class RSP extends Component{
    state = {
        result: '',
        imgCoord: '0',
        score: 0,
    }; 
    componentDidMount(){
        const {imgcoord} - this.state;
    }
    componentDidUpdate(){

    }
    componentWillUnmount(){

    }
    onClickBtn = (choice) => {
        
    }; 
    render(){
        const { result, score, imgCoord} = this.state;
        return(
            <>
                <div id="computer" style={{background:`url(https://en.pimg.jp/023/102/267/1/23182267.jpg) ${imgCoord} 0 `}} />
                <div>
                    <button id="rock" className="btn" onClick={() => onClickBtn('바위')}>바위</button>  
                    <button id="scissor" className="btn" onClick={() => onClickBtn('가위')}>가위</button>  
                    <button id="paper" className="btn" onClick={() => onClickBtn('보')}>보</button>  
                </div>
                <div>{result}</div>
                <div>현재 {score}점</div>
            </>
        );
    }
}

export default RSP;