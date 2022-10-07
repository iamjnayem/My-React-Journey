import React from 'react'

function UiStructure() {
  return (
    <section>
        <header>
            <h1>A Header</h1>
        </header>
        <nav>
            <a href='item'>
                Nav Item
            </a>
        </nav>
        <main>
            <p>The main content...</p>
        </main>
        <footer>
            <small>&copy;{new Date().getFullYear()}</small>
        </footer>
    </section>
  )
}

export default UiStructure