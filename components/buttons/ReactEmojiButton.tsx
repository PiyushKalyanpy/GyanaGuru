import { useState } from 'react'
import EmojiPicker, {
  EmojiStyle,
  SkinTones,
  Theme,
  Categories,
  EmojiClickData,
  Emoji,
  SuggestionMode,
  SkinTonePickerLocation
} from 'emoji-picker-react'
const ReactEmojiButton = () => {
  const [selectedEmoji, setSelectedEmoji] = useState<string>('')
  const [showEmojiPanel, setShowEmojiPanel] = useState<boolean>(false)

  function onClick (emojiData: EmojiClickData, event: MouseEvent) {
    console.log(emojiData)
    setSelectedEmoji(emojiData.unified)
    setShowEmojiPanel(!showEmojiPanel)
  }
  return (
    <div>
      <button
        className='flex transition border-2 rounded-xl text-zinc-500 hover:text-black hover:border-black'
        onClick={() => setShowEmojiPanel(!showEmojiPanel)}
      >
        <span className='p-1 text-sm cursor-pointer material-symbols-outlined'>
          sentiment_satisfied_alt
        </span>
      </button>
      
      {showEmojiPanel && (
        <EmojiPicker
          onEmojiClick={onClick}
          autoFocusSearch={false}
          theme={Theme.AUTO}
          height={350}
          width='100%'
          emojiVersion='0.6'
          lazyLoadEmojis={true}
          suggestedEmojisMode={SuggestionMode.RECENT}
          searchPlaceHolder='Search emoji'
          defaultSkinTone={SkinTones.MEDIUM}
          emojiStyle={EmojiStyle.NATIVE}
        />
      )}
    </div>
  )
}

export default ReactEmojiButton
