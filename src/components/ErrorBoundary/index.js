import React, { Component } from 'react'

class ErrorBoundary extends Component {
  state = { error: null, errorInfo: null }

  componentDidCatch (error, errorInfo) {
      this.setState({
      error,
      errorInfo
    })
  }

  render () {
    const { error, errorInfo } = this.state
    const { children } = this.props

    if (errorInfo) {
      // Error path
      return (
        <div>
          <h2>Something went wrong.</h2>
          <details style={{ whiteSpace: 'pre-wrap' }}>
            {error && error.toString()}
            <br />
            {errorInfo.componentStack}
          </details>
        </div>
      )
    }
    // Normally, just render children
    return children
  }
}

export default ErrorBoundary
