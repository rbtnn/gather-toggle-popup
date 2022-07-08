
let g:loaded_qficonv = 1

command! -bar -nargs=0 QfIconv  :call s:qficonv()

function! s:qficonv() abort
	let enc_from = 'shift_jis'
	if enc_from != &encoding
		let xs = getqflist()
		for x in xs
			let x['text'] = qficonv#encoding#iconv_utf8(x['text'], enc_from)
		endfor
		call setqflist(xs)
	endif
endfunction

