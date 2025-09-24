import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import './style.css'

const VirtualGallery: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null)

  const moveState = useRef({
    forward: false,
    backward: false,
    left: false,
    right: false,
    rotateLeft: false,
    rotateRight: false
  })

  useEffect(() => {
    if (!mountRef.current) return

    // prevent scrolling
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [])

  useEffect(() => {
    if (!mountRef.current) return

    // ----- SCENE -----
    const scene = new THREE.Scene()

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6)
    scene.add(ambientLight)

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1)
    directionalLight.position.set(5, 10, 7.5)
    directionalLight.castShadow = true
    scene.add(directionalLight)

    // ----- CAMERA -----
    const camera = new THREE.PerspectiveCamera(
      75,
      mountRef.current.clientWidth / mountRef.current.clientHeight,
      0.1,
      100
    )
    camera.position.set(0.02, 0.2, 2.6)

    // ----- RENDERER -----
    const renderer = new THREE.WebGLRenderer({ antialias: true })
    renderer.shadowMap.enabled = true
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight)
    mountRef.current.appendChild(renderer.domElement)

    // ----- CONTROLS -----
    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true
    controls.enabled = false // disable mouse orbit

    // ----- LOAD MODEL -----
    const loader = new GLTFLoader()
    loader.load(
      '/modules/the_picture_gallery.glb',
      (gltf) => {
        gltf.scene.position.set(0, 0, 2)
        gltf.scene.scale.set(2, 2, 2)
        scene.add(gltf.scene)
      },
      undefined,
      (error) => console.error('Error loading GLB', error)
    )

    // ----- KEYBOARD EVENTS -----
    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.code) {
        case 'KeyW':
        case 'ArrowUp':
          moveState.current.forward = true
          break
        case 'KeyS':
        case 'ArrowDown':
          moveState.current.backward = true
          break
        case 'KeyA':
          moveState.current.left = true
          break
        case 'KeyD':
          moveState.current.right = true
          break
        case 'ArrowLeft':
          moveState.current.rotateLeft = true
          break
        case 'ArrowRight':
          moveState.current.rotateRight = true
          break
      }
    }

    const handleKeyUp = (event: KeyboardEvent) => {
      switch (event.code) {
        case 'KeyW':
        case 'ArrowUp':
          moveState.current.forward = false
          break
        case 'KeyS':
        case 'ArrowDown':
          moveState.current.backward = false
          break
        case 'KeyA':
          moveState.current.left = false
          break
        case 'KeyD':
          moveState.current.right = false
          break
        case 'ArrowLeft':
          moveState.current.rotateLeft = false
          break
        case 'ArrowRight':
          moveState.current.rotateRight = false
          break
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('keyup', handleKeyUp)

    // ----- MOVEMENT -----
    const boundaries = { minX: -5, maxX: 5, minZ: -5, maxZ: 5 }
    const clock = new THREE.Clock()

    const moveCamera = () => {
      const delta = clock.getDelta() // time since last frame
      const moveSpeed = 0.1 * delta // units per second
      const rotateSpeed = 1 * delta // radians per second

      // Forward direction
      const direction = new THREE.Vector3()
      camera.getWorldDirection(direction)
      direction.y = 0
      direction.normalize()

      // Sideways direction
      const right = new THREE.Vector3()
      right.crossVectors(direction, camera.up).normalize()

      // Calculate next position
      const nextPos = camera.position.clone()

      if (moveState.current.forward) nextPos.addScaledVector(direction, moveSpeed)
      if (moveState.current.backward) nextPos.addScaledVector(direction, -moveSpeed)
      if (moveState.current.left) nextPos.addScaledVector(right, -moveSpeed)
      if (moveState.current.right) nextPos.addScaledVector(right, moveSpeed)

      // Apply boundaries
      if (
        nextPos.x >= boundaries.minX &&
        nextPos.x <= boundaries.maxX &&
        nextPos.z >= boundaries.minZ &&
        nextPos.z <= boundaries.maxZ
      ) {
        camera.position.copy(nextPos)
      }

      // Rotation
      if (moveState.current.rotateLeft) camera.rotateY(rotateSpeed)
      if (moveState.current.rotateRight) camera.rotateY(-rotateSpeed)
    }

    // ----- RESIZE -----
    const handleResize = () => {
      if (!mountRef.current) return
      camera.aspect = mountRef.current.clientWidth / mountRef.current.clientHeight
      camera.updateProjectionMatrix()
      renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight)
    }
    window.addEventListener('resize', handleResize)

    // ----- ANIMATE -----
    const animate = () => {
      requestAnimationFrame(animate)
      moveCamera()
      renderer.render(scene, camera)
    }
    animate()

    // ----- CLEANUP -----
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('keyup', handleKeyUp)
      window.removeEventListener('resize', handleResize)
      if (mountRef.current) mountRef.current.removeChild(renderer.domElement)
      renderer.dispose()
    }
  }, [])

  return <div ref={mountRef} className="virtual-gallery-page" />
}

export default VirtualGallery
