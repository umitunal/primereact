import React, {Component} from 'react';
import classNames from 'classnames';

export class Button extends Component {
    
    render() {
        var styleClass = classNames('ui-button ui-widget ui-state-default ui-corner-all', this.props.className, {
                'ui-button-text-only': !this.props.icon && this.props.label,
                'ui-button-icon-only': this.props.icon && !this.props.label,
                'ui-button-text-icon-left': this.props.icon && this.props.iconPos === 'left',
                'ui-button-text-icon-right': this.props.icon && this.props.iconPos === 'right',
                'ui-state-disabled': this.props.disabled
        }),
        iconStyleClass = null;

        var buttonProps = Object.assign({}, this.props);
        delete buttonProps.iconPos;
        delete buttonProps.icon;
        delete buttonProps.label;
        
        if(this.props.icon) {
            iconStyleClass = classNames(this.props.icon, 'ui-c fa fa-fw', {
                'ui-button-icon-left': this.props.iconPos !== 'right',
                'ui-button-icon-right': this.props.iconPos === 'right'
            });
        }

        return (
            <button {...buttonProps} type="button" className={styleClass}>
                {this.props.icon && <span className={iconStyleClass}></span>}
                <span className="ui-button-text ui-c">{this.props.label || 'ui-button'}</span>
                {this.props.children}
            </button>
        );
    }
}

Button.defaultProps = {
    label: null,
    icon: null,
    iconPos: 'left'
}

Button.propTypes = {
    label: React.PropTypes.string,
    icon: React.PropTypes.string,
    iconPos: React.PropTypes.string
};