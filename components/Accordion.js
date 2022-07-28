import React, { Component } from "react";
import PropTypes from "prop-types";

class Accordion extends Component {
  static propTypes = {
    allowMultipleOpen: PropTypes.bool,
    children: PropTypes.instanceOf(Object).isRequired,
  };

  static defaultProps = {
    allowMultipleOpen: false,
  };

  constructor(props) {
    super(props);

    const openSections = {};
    
    this.props.children.forEach(child => {
      if (child.props.isOpen) {
        openSections[child.props.label] = true;
      }
    });

    this.state = { openSections };
  }

  onClick = label => {
    const { props: { allowMultipleOpen }, state: { openSections } } = this;

    const isOpen = !!openSections[label];

    if (allowMultipleOpen) {
      this.setState({
        openSections: {
          ...openSections,
          [label]: !isOpen
        }
      });
    } else {
      this.setState({
        openSections: {
          [label]: !isOpen
        }
      });
    }
  };

  render() {
    const { 
      onClick,
      props: { children },
      state: { openSections },
    } = this;

    return (
      <div>
        {children.map(child => (
          <AccordionSection
            isOpen={!!openSections[child.props.label]}
            label={child.props.label}
            onClick={onClick}
            key={child}
          >
            {child.props.children}
          </AccordionSection>
        ))}
      </div>
    );
  }
}

class AccordionSection extends Component {
    static propTypes = {
      children: PropTypes.instanceOf(Object).isRequired,
      isOpen: PropTypes.bool.isRequired,
      label: PropTypes.string.isRequired,
      onClick: PropTypes.func.isRequired
    };
  
    onClick = () => {
      this.props.onClick(this.props.label);
    };
  
    render() {
      const { onClick, props: { isOpen, label } } = this;
  
      return (
        <div
          style={{
            background: isOpen ? "#8b5cf6" : "#fff",
            border: "1px solid #8b5cf6",
            padding: "15px 20px"
          }}
          className="mb-3"
        >
          <div onClick={onClick} style={ { cursor: "pointer" , color: isOpen ? "#fff" : "#000" } } className="font-bold">
            {label}
            <div style={{ float: "right" }}>
              {!isOpen && <span>&#9650;</span>}
              {isOpen && <span>&#9660;</span>}
            </div>
          </div>
          {isOpen && (
            <div className="bg-gray rounded-md m-1"
              style={{
                background: "#fff",
                marginTop: 10,
                padding: "10px 20px",
              }}
            >
              {this.props.children}
            </div>
          )}
        </div>
      );
    }
  }
  

export default Accordion;
