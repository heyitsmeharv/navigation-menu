# navigation-menu

navigation-menu is a package built with React.js which contains a simple menu component.

I built this purely for fun and the main purpose was to learn how to publish to npm. 

## Installation

```bash
npm install @heyitsmeharv/navigation-menu
```

## Usage

```js
import { NavigationMenu } from '@heyitsmeharv/navigation-menu';

<NavigationMenu 
  colour="#43c9f7"
  border="#14646F"
  options=[
    { icon: <BsHouse />, label: 'Home', onClick: () => { } },
    { icon: <BsAlarmFill />, label: 'Reminder', onClick: () => { } },
    { icon: <BsFillChatSquareFill />, label: 'Chat', onClick: () => { } },
  ]
/> 
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.