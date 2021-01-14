import React from 'react';
import './Main.css';

class Main extends React.Component {
    render() {
        return (
            <main className="container">
                <article>
                    <header>
                        <h1>Article 1</h1>
                        <h1>Article 2</h1>
                    </header>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse laudantium quam mollitia ullam necessitatibus, reiciendis dicta,
                    similique maxime assumenda vero, asperiores ipsa hic praesentium repellat. Dolorum, consequuntur maiores? Magni, ipsam.
                    </p>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse laudantium quam mollitia ullam necessitatibus, reiciendis dicta,
                    similique maxime assumenda vero, asperiores ipsa hic praesentium repellat. Dolorum, consequuntur maiores? Magni, ipsam.
                    </p>
                </article>
            </main>
        );
    }
}

export default Main;