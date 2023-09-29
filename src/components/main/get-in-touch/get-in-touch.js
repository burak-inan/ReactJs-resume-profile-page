import React from 'react'
import SectionHeader from '../section-header/section-header'
import "./get-in-touch.css"
import textLabels from "./text-label.json"
import TextLabel from './text-label'

const GetInTouch = () => {
  return (
    <section id="contact" className="contact">
			
			<SectionHeader title={"Get In Touch"} isDownloadResume={false}/>

			
			<form method="post" action="form/contactform.php">

				<div className="row">

					{textLabels.map((text,index)=> <TextLabel key={index} {...text}/>)}

					<div className="col-md-12 col-sm-12 col-xs-12">
						<div className="form-group">
							<textarea name="InputMessage" id="InputMessage" className="form-control" rows="6" placeholder="Message" required=""></textarea>
						</div>
					</div>

				</div>

				<input type="submit" name="submit" id="submit" value="Send Message" className="btn btn-default pull-left"/>

			</form>

		</section>
  )
}

export default GetInTouch