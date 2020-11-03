import * as React from "react";
import FeaturedMessage from "../classes/FeaturedMessage";

interface State {
    //
}

interface Props {
    messages: FeaturedMessage[]
}

/*
    This is a sample React component, that's renders 1-4 messages in columns.
    It has no styles, no graphics, and serves only as example of strictly typed React Component
 */
class SampleComponent extends React.Component<Props, State> {
    // eslint-disable-next-line @typescript-eslint/no-useless-constructor
    constructor(props: Props) {
        super(props);
    }

    renderMessage(msg: FeaturedMessage, totalMessages: number) {
        return (
          <div key={"key_" + msg.id} className={"col-sm-12 col-md-" + 12 / totalMessages}>
              <div><h3>{msg.title}</h3></div>
              <div>{msg.message}</div>
          </div>
        );
    }

    render() {
        let size = Math.min(this.props.messages.length, 4)

        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-12"><div>Sample React Component</div></div>
                </div>
                <div className="row">
                    {this.props.messages.slice(0, size).map(msg => this.renderMessage(msg, size))}
                </div>
            </div>
        );
    }
}

export default SampleComponent