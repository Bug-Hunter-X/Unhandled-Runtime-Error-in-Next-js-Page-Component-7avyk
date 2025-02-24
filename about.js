```javascript
// pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app</h1>
      <Link href="/about">
        <a>Go to About</a>
      </Link>
    </div>
  );
}
```
```javascript
// pages/about.js

export default function About() {
  // This will cause an error if you don't handle it properly.
  const nonExistentVariable = somethingUndefined;
  return (
    <div>
      <h1>About Us</h1>
      <p>Some info here.</p>
      <p>The value is: {nonExistentVariable}</p>
    </div>
  );
}
```