import VideoAvatar from 'components/Icons/VideoAvatar'

export default function NoEmbed() {
  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center flex-col z-10 bg-zinc-900">
      <VideoAvatar size={100} />
      <p className="text-sm text-slate-400 mt-3 text-center">
        Inserte vídeos de plataformas (YouTube, Vimeo, JWplayer etc.)
        fácilmente.
      </p>
    </div>
  )
}
