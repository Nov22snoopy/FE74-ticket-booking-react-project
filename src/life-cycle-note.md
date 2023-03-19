<!-- Mounting -->
## Mounting
Chay khi component duoc khoi tao

## Constructor
chay sau khi component duoc hien thi, khoi tao cac thuoc tinh cua Component

## getDerivedStateFromProps
chay sau constructor => dung de thay doi state truoc khi render UI
...
  js
  static getDerivedStateFromProps(nextProps, currentState) {

    console.log("getDerivedStateFromProps Child");
    //Khong su dung this trong getDerivedStateFromProps
    // currentState.number = 10;
    return currentState;
  }
...

## render
chay sau khi getDerivedStateFromProps de render ra UI

## componentDidMount
chay sau khi ham render(), dung de call API hoac setState