import { createFileRoute, Link } from '@tanstack/react-router';
import { useState } from 'react';

export const Route = createFileRoute('/')({
  component: RouteComponent,
});

const itemsMany = Array.from({ length: 3000 }, (_, i) => i);
const itemsFew = Array.from({ length: 5 }, (_, i) => i);

function RouteComponent() {
  const [items, setItems] = useState<number[]>(itemsFew);

  return (
    <div>
      <button onClick={() => setItems(itemsFew)}>show few</button>
      <button onClick={() => setItems(itemsMany)}>show many</button>
      <ul>
        {items.map((id) => (
          <li key={id}>
            <Link to="/items/$id" params={{ id }}>
              {/* <a
                href={`/items/${id}`}
                onClick={() => navigate({ to: '/items/$id', params: { id } })}
              > */}
              item {id}
              {/* </a> */}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
