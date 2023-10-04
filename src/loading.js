import React from 'react'
import PropTypes from 'prop-types';

import css from './loading.module.scss'

function Loading(props) {
    return (
        <div className={css.main + (props.fullScreen ? ' ' + css.full : '') + (props.theme ? ' ' + css['theme-' + props.theme] : '')}><div className={css.spinner}/></div>
    )
}

Loading.propTypes = {
    fullScreen: PropTypes.bool
}

export default Loading ;