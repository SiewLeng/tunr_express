var React = require("react");

class New extends React.Component {
  render() {
    return (
      <html>
        <head />
        <body>
          <div>
            <form action="/new/artist/updated" method ="POST">
                <div>
                    <label> Artist name </label>
                    <input type ="text" name="name"/>
                </div>
                <div>
                    <label> Photo Url </label>
                    <input type ="text" name="photo_url"/>
                </div>
                <div>
                    <label> Nationality </label>
                    <input type ="text" name="nationality"/>
                </div>
                <input type="submit" value="submit"/>
            </form>
          </div>
        </body>
      </html>
    );
  }
}

module.exports = New;