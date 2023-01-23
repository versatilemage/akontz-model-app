import React, { useRef, useEffect } from 'react';
// import SimplePeer from 'simple-peer';

function VideoChat() {
  // const localVideoRef = useRef(null);
  // const remoteVideoRef = useRef(null);

  // useEffect(() => {
    // navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then(stream => {
    //   localVideoRef.current.srcObject = stream;

    //   const peer = new SimplePeer({ initiator: true, stream });

    //   peer.on('signal', data => {
    //     // Send the signal data to the remote peer
    //   });

    //   peer.on('stream', stream => {
    //     remoteVideoRef.current.srcObject = stream;
    //   });
    //   // socket.on('signal', data => {
    //   //   peer.signal(data);
    //   // });
    // });
  // }, []);

  return (
    <div>
      {/* <video ref={localVideoRef} autoPlay className="identifier-1-for-video"></video>
      <video ref={remoteVideoRef} autoPlay className="identifier-2-for-video"/> */}
    </div>
  );
}

export default VideoChat;
