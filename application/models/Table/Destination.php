<?php
class Model_Table_Destination extends Zend_Db_Table_Abstract
{
	protected $_name = 'cc_did_destination';
	protected $_primary = 'id';
	
	public function i_fInsert ($the_a_Data)
	{
		return (array)$this->insert($the_a_Data);
	}
	
	public function a_fSearch($the_a_Data)
	{		
		$o_Select = $this->_db->select()->from(array('t1' => $this->_name), array('*'))
					->join(array('t2' => 'cc_did'), 't1.id_cc_did = t2.id', array('t2.did'))
					->join(array('t3' => 'cc_card'), 't1.id_cc_card = t2.id', array('t3.username'))
					->where("t1.destination like ?", "%" . $the_a_Data['cid'] . "%")
					->orWhere('t2.did like ?', '%' .$the_a_Data['cid'] . '%')
					->orWhere('t3.username like ?', '%' .$the_a_Data['cid'] . '%');
		return $this->_db->fetchAll($o_Select);	
	}
	
	public function i_fDelete($the_i_Id)
	{
		return $this->delete($this->_db->quoteInto('id=?', $the_i_Id));
	}
	
	public function o_fGetItem($the_i_Id)
	{		
		$o_Select = $this->_db->select()->from($this->_name, array('*'))->where("id = ?", $the_i_Id);
		return $this->_db->fetchRow($o_Select);		
	}
	
	public function i_fUpdate($the_a_Data, $the_i_Id)
	{
		return $this->update($the_a_Data, $this->_db->quoteInto($this->_primary . ' = ?', $the_i_Id));
	}
}
?>