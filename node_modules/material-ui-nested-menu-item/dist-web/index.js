import React, { useRef, useImperativeHandle, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ArrowRight from '@material-ui/icons/ArrowRight';
import clsx from 'clsx';

const TRANSPARENT = 'rgba(0,0,0,0)';
const useMenuItemStyles = makeStyles((theme) => ({
    root: (props) => ({
        backgroundColor: props.open ? theme.palette.action.hover : TRANSPARENT
    })
}));
/**
 * Use as a drop-in replacement for `<MenuItem>` when you need to add cascading
 * menu elements as children to this component.
 */
const NestedMenuItem = React.forwardRef(function NestedMenuItem(props, ref) {
    const { parentMenuOpen, component = 'div', label, rightIcon = React.createElement(ArrowRight, null), children, className, tabIndex: tabIndexProp, MenuProps = {}, ContainerProps: ContainerPropsProp = {}, ...MenuItemProps } = props;
    const { ref: containerRefProp, ...ContainerProps } = ContainerPropsProp;
    const menuItemRef = useRef(null);
    useImperativeHandle(ref, () => menuItemRef.current);
    const containerRef = useRef(null);
    useImperativeHandle(containerRefProp, () => containerRef.current);
    const menuContainerRef = useRef(null);
    const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
    const handleMouseEnter = (event) => {
        var _a;
        setIsSubMenuOpen(true);
        if ((_a = ContainerProps) === null || _a === void 0 ? void 0 : _a.onMouseEnter) {
            ContainerProps.onMouseEnter(event);
        }
    };
    const handleMouseLeave = (event) => {
        var _a;
        setIsSubMenuOpen(false);
        if ((_a = ContainerProps) === null || _a === void 0 ? void 0 : _a.onMouseLeave) {
            ContainerProps.onMouseLeave(event);
        }
    };
    // Check if any immediate children are active
    const isSubmenuFocused = () => {
        var _a, _b, _c, _d;
        const active = (_b = (_a = containerRef.current) === null || _a === void 0 ? void 0 : _a.ownerDocument) === null || _b === void 0 ? void 0 : _b.activeElement;
        for (const child of (_d = (_c = menuContainerRef.current) === null || _c === void 0 ? void 0 : _c.children, (_d !== null && _d !== void 0 ? _d : []))) {
            if (child === active) {
                return true;
            }
        }
        return false;
    };
    const handleFocus = (event) => {
        var _a;
        if (event.target === containerRef.current) {
            setIsSubMenuOpen(true);
        }
        if ((_a = ContainerProps) === null || _a === void 0 ? void 0 : _a.onFocus) {
            ContainerProps.onFocus(event);
        }
    };
    const handleKeyDown = (event) => {
        var _a, _b, _c, _d, _e;
        if (event.key === 'Escape') {
            return;
        }
        if (isSubmenuFocused()) {
            event.stopPropagation();
        }
        const active = (_b = (_a = containerRef.current) === null || _a === void 0 ? void 0 : _a.ownerDocument) === null || _b === void 0 ? void 0 : _b.activeElement;
        if (event.key === 'ArrowLeft' && isSubmenuFocused()) {
            (_c = containerRef.current) === null || _c === void 0 ? void 0 : _c.focus();
        }
        if (event.key === 'ArrowRight' &&
            event.target === containerRef.current &&
            event.target === active) {
            const firstChild = (_d = menuContainerRef.current) === null || _d === void 0 ? void 0 : _d.children[0];
            (_e = firstChild) === null || _e === void 0 ? void 0 : _e.focus();
        }
    };
    const open = isSubMenuOpen && parentMenuOpen;
    const menuItemClasses = useMenuItemStyles({ open });
    // Root element must have a `tabIndex` attribute for keyboard navigation
    let tabIndex;
    if (!props.disabled) {
        tabIndex = tabIndexProp !== undefined ? tabIndexProp : -1;
    }
    return (React.createElement("div", Object.assign({}, ContainerProps, { ref: containerRef, onFocus: handleFocus, tabIndex: tabIndex, onMouseEnter: handleMouseEnter, onMouseLeave: handleMouseLeave, onKeyDown: handleKeyDown }),
        React.createElement(MenuItem, Object.assign({}, MenuItemProps, { className: clsx(menuItemClasses.root, className), ref: menuItemRef }),
            label,
            rightIcon),
        React.createElement(Menu
        // Set pointer events to 'none' to prevent the invisible Popover div
        // from capturing events for clicks and hovers
        , { 
            // Set pointer events to 'none' to prevent the invisible Popover div
            // from capturing events for clicks and hovers
            style: { pointerEvents: 'none' }, anchorEl: menuItemRef.current, anchorOrigin: {
                vertical: 'top',
                horizontal: 'right'
            }, transformOrigin: {
                vertical: 'top',
                horizontal: 'left'
            }, open: open, autoFocus: false, disableAutoFocus: true, disableEnforceFocus: true, onClose: () => {
                setIsSubMenuOpen(false);
            } },
            React.createElement("div", { ref: menuContainerRef, style: { pointerEvents: 'auto' } }, children))));
});

export default NestedMenuItem;
//# sourceMappingURL=index.js.map
