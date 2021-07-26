import React from 'react';

export default function Todos() {
    const userName = 'Jing';

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div>
            <section>
              <h1>TODO LIST</h1>
              <h2>Hi {userName}, what’s your focus for today?</h2>
            </section>
            <section>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder='Input whatever you like...'/>
                    <button type='submit'>Add Task</button>
                </form>
            </section>
        </div>
    )
}