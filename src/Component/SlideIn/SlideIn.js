import React from "react";
import './SlideIn.css';
import { ReactComponent as RightDownload} from '../../Media/SVG/downloadSlide.svg';

export const SlideIn = ({ closeSlide, toggleForm, clickToPreviewSlideBar })=>{

    const slowMotion = {
        'right': '0',
        'transition': '2s ease-in'
    }

    return(<div className="slider" style={clickToPreviewSlideBar ? slowMotion : null}>

        <div className="slider-top">

            <div class="cls_btn" id="q_close_" onClick={closeSlide}>×</div>
            {/* jjj */}
            &#160;
            &#160;
            &#160;
        </div>

        <div className="slider-download">
            <div className="slider-left">
                <div className="title tle"> Items in this transfer </div>
                <div className="detail">5  files, 185.22 MB・Transfer expires in 7 days</div>
            </div>
            <div className="slider-right">
                <button className="bbbbbnnnnn" onClick={toggleForm}>Download all</button>
            </div>
        </div>


        <div className="slider-list">

            <div className="card" onClick={toggleForm}>
                <div className="card-left">
                    <div className="title">Sample video.MP4</div>
                    <div className="size" style={{fontSize: '14px'}}>128 MB</div>
                </div>

                <div className="card-right">
                    <RightDownload className="ssvvgg"/>
                </div>
            </div>


            <div className="card" onClick={toggleForm}>
                <div className="card-left">
                        <div className="title">Drawing & specifications.PDF</div>
                        <div className="size" style={{fontSize: '14px'}}>42 MB</div>
                    </div>

                    <div className="card-right">
                        <RightDownload className="ssvvgg"/>
                </div>
            </div>



            <div className="card" onClick={toggleForm}>
                <div className="card-left">
                        <div className="title">Company profile.PDF</div>
                        <div className="size" style={{fontSize: '14px'}}>11 MB</div>
                    </div>

                    <div className="card-right">
                        <RightDownload className="ssvvgg"/>
                </div>
            </div>



            <div className="card" onClick={toggleForm}>
                <div className="card-left">
                        <div className="title">Product list.PDF</div>
                        <div className="size" style={{fontSize: '14px'}}>1.02 MB</div>
                    </div>

                    <div className="card-right">
                        <RightDownload className="ssvvgg"/>
                </div>
            </div>

            <div className="card" onClick={toggleForm}>
                <div className="card-left">
                        <div className="title">Group RFQ Form.zip</div>
                        <div className="size" style={{fontSize: '14px'}}>3.2 MB</div>
                    </div>

                    <div className="card-right">
                        <RightDownload className="ssvvgg"/>
                </div>
            </div>


            {/* <div className="card" onClick={toggleForm}>
                <div className="card-left">
                        <div className="title">Purchase plan.xlsx</div>
                        <div className="size" style={{fontSize: '14px'}}>17.2 MB</div>
                    </div>

                    <div className="card-right">
                        <RightDownload className="ssvvgg"/>
                </div>
            </div> */}

        </div>

    </div>)
};