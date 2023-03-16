import React from 'react'
import css from "./Section.module.css";
import { PropTypes } from 'prop-types'

export default function Section({title = '', children}) {
  return (
    <div>
      <section className={css.section}>
            {title && <h2 className={css.title}>{title}</h2>}
            {children}
        </section>
    </div>
  )
}

Section.propTypes = {
    title: PropTypes.string,
    children: PropTypes.any.isRequired,
}
