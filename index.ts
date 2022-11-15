import { Fluence } from '@fluencelabs/fluence';
import { krasnodar } from '@fluencelabs/fluence-network-environment';
import {onboard_game} from "./src/_aqua/onboard_service";

connect()

async function start() {
  await Fluence.start({ connectTo: krasnodar[2]});
}

async function connect() {

  await start()

  try{
    const requestInputOnboard = {
      banner: 'https://ipfs-cluster-2.appserver.projectoasis.io/ipfs/QmSSQLvtN3LGaEFurTiEfFVuxVXJrteG7RJiCz9kNmGSDm',
      wallet: '0xdc025BBED2baa3897c511C3aA08aA5A9F40676dF',
      arcade: 'https://ipfs-cluster-2.appserver.projectoasis.io/ipfs/QmVcNkHMSWSaJSE4NREfyaiVMea4vyq8zEGfjyquNqD9dd/arc2.PNG',
      screenshot: [
        'https://ipfs-cluster-2.appserver.projectoasis.io/ipfs/QmSJ93qfKM2B9BGYmWs6VwXf7KdPcRU7jVvdCDANnQbHvg/favicon.ico',
        'https://ipfs-cluster-2.appserver.projectoasis.io/ipfs/QmSJ93qfKM2B9BGYmWs6VwXf7KdPcRU7jVvdCDANnQbHvg/fullscreen-button.png'
      ],
      gameName: 'asdf1123456781',
      description: 'asdfasd1234',
      developer: 'asdf123456',
      youtube: 'sdfsd12345',
      facebook: 'sdf12345',
      instagram: 'sdsxc1',
      twitter: 'cccsadcdweqdwqe1',
      linkedin: 'zzzz12',
      genre: [ 'SinglePlayer', 'MultiPlayer' ],
      gameURL:"https://spheron.mypinata.cloud/ipfs/QmSqGDYNiNYLdZX358hx8cKDVmirACDWPmAY9Uvz4XeETQ",
      arcadeSize: "1"
    }

    let v = await onboard_game(requestInputOnboard)

    console.log(v)
    
  }catch(e){
    // return e
}

}

